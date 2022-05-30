import React, { useRef, useMemo, useCallback, forwardRef } from 'react'
import { ScrollView, View, Dimensions } from "react-native"
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import CustomBackdrop from "../CustomBackdrop"
import styles from "./styles"



function ImagePicker({ style, children, bottomRef, ...rest }) {
    // variables
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
    
    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <BottomSheetModal
            ref={bottomRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            style={styles.component}
            backdropComponent={CustomBackdrop}
        >
            {children}
        </BottomSheetModal>


    )
}


export default (ImagePicker)