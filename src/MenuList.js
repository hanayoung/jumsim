import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({
});

const MenuList = ({ item }) => {

    return (
        <View>
            <Text>{item}</Text>
        </View>
    );
};

MenuList.defaultProps = {
    onPressOut: () => {},
};

MenuList.propTypes = {
    item: PropTypes.object.isRequired,
    onPressOut : PropTypes.func,
};

export default MenuList;