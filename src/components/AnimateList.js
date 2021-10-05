// from: https://itnext.io/animating-list-reordering-with-react-hooks-aca5e7eeafba

import React, { useEffect, useLayoutEffect, useState } from 'react';
import usePrevious from '../hooks/usePrevious';

const calculateBoundingBoxes = children => {
    const boundingBoxes = {};

    React.Children.forEach(children, child => {
        const domNode = child.ref.current;
        if (domNode) {
            const nodeBoundingBox = domNode.getBoundingClientRect();

            boundingBoxes[child.key] = nodeBoundingBox;
        }
    });

    return boundingBoxes;
}

const AnimateList = ({children}) => {
    const [boundingBox, setBoundingBox] = useState({});
    const [prevBoundingBox, setPrevBoundingBox] = useState({});
    const prevChildren = usePrevious(children);

    useLayoutEffect(() => {
        const newBoundingBox = calculateBoundingBoxes(children);
        setBoundingBox(newBoundingBox);
    }, [children]);

    useLayoutEffect(() => {
        const prevBoundingBox = calculateBoundingBoxes(prevChildren);
        setPrevBoundingBox(prevBoundingBox);
    }, [prevChildren]);
    
    useEffect(() => {
        try {
            const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;
            
            if (hasPrevBoundingBox) {
                React.Children.forEach(children, child => {
                    const domNode = child.ref.current;
                    const firstBox = prevBoundingBox[child.key];
                    const lastBox = boundingBox[child.key];

                    const changeInY = firstBox.top - lastBox.top;

                    if (changeInY) {
                        window.requestAnimationFrame(() => {
                            domNode.style.transform = `translateY(${changeInY}px)`;
                            domNode.style.transition = "transform 0s";

                            window.requestAnimationFrame(() => {
                                domNode.style.transform = "";
                                domNode.style.transition = "transform 500ms";
                            })
                        });
                    }
                });
            }
        } catch (err) {
            console.log('err')
            console.error(err);
        }
        

        
    }, [boundingBox, prevBoundingBox, children]);
    

    return children;
};

export default AnimateList;