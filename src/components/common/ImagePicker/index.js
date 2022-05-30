import React, { useRef, useMemo, useCallback, forwardRef } from 'react'
import { ScrollView, View, Text } from "react-native"
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
// import RBSheet from "react-native-raw-bottom-sheet";

import styles from "./styles"
function ImagePicker({ style, children,bottomRef, ...rest }) {
    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

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
            >
                {children}
            </BottomSheetModal>


    )
}


export default (ImagePicker)