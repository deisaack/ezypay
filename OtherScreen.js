import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button, Footer, Title } from 'native-base'
import CustomHeader from './Components/CustomHeader'

class OtherScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Other",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('./img/logo.png')}
                style={[styles.icon]}
            />

    })

    render() {
        return (

            <Container>

                <CustomHeader
                    title="Other Title"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <Content>
                    <Text>Hello World</Text>
                </Content>
                <Footer>
                    <Title>Footer</Title>
                </Footer>
            </Container>
        )
    }

}

export default OtherScreen

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})