import React from 'react'
import { Modal, View, TouchableOpacity, ScrollView, Text } from "react-native"
import styles from "./styles"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function AppModal({ style, children, visible, title, onClose, modalBody, modalFooter }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}

            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                onClose()
            }}
        >
            <TouchableOpacity style={[styles.AppModal, style]}>
                <View
                    style={styles.ModalView}
                >
                    <ScrollView>
                        <View style={styles.ModalHeader}>
                            <Text style={styles.Title}>{title}</Text>
                            <TouchableOpacity onPress={onClose}><MaterialIcons size={20} name='close' /></TouchableOpacity>
                        </View>
                        {modalBody && <View style={styles.ModalBody}>{modalBody}</View>}
                        {modalFooter && <View style={styles.ModalFooter}>{modalFooter}</View>}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}
