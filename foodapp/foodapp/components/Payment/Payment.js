import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from '@react-native-community/async-storage';

const Payment = (amt, order, placeOrder) => {
    var options = {
            description: 'Bill for gymkhanna',
            image: 'https://thumbs.dreamstime.com/z/chef-serve-food-multi-colors-illustration-61502303.jpg',
            currency: 'INR',
            key: 'rzp_test_Ivx1lvbraLqLpG',
            amount: (amt*100).toString(),
            name: 'Foodie',
            prefill: {
            email: 'krishna@gmail.com',
            contact: '919962231789',
            name: 'Krishna'
        },
    }
    RazorpayCheckout.open(options).then(async (data) => {
        // handle success
        //await AsyncStorage.setItem("prevOrder", order)
        alert(`Success: ${data.razorpay_payment_id}!`);
        placeOrder();
        //updateStatus("success");
        //return "success";
    }).catch(async (error) => {
        //temp fix
        //if(error.code === 0) await AsyncStorage.setItem("prevOrder", order)
        // handle failure
        if(error.code !== 0) alert(`Error: ${error.code} | ${error.description}`);
        placeOrder();
    });
};

export default Payment;
