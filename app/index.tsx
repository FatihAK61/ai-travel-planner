import { View } from 'react-native'
import Login from '../components/Login'
import { auth } from '../config/FirebaseConfig'
import { Redirect } from 'expo-router';

const index = () => {

    const user = auth.currentUser;
    return (
        <View style={{ flex: 1 }}>
            {
                user ? <Redirect href={'/myTrip'} /> : <Login />
            }
        </View>
    )
}

export default index