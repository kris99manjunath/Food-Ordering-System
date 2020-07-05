import React from 'react';
import firebase from 'firebase';
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import FoodItem from './FoodItem'
import Payment from '../Payment/Payment';
import AsyncStorage from '@react-native-community/async-storage';
import md5 from 'md5';

export default class CartView extends React.Component{
    constructor(props){
        super(props);
        var total = 0, orders = this.props.navigation.state.params;
        Object.entries(orders).forEach(entry => total += entry[1].cnt * entry[1].info.cost)
        this.state = {
            orders: orders,
            total: total,
            dishes: [],
            init: false,
            shop: "shop1",
            token: "",
        }
        console.log(Object.entries(this.state.orders));
    }
    componentDidMount(){
        var shopsFood = firebase.database().ref(this.state.shop + "/food/");
        shopsFood.on('value', (snapshot)=> {
            if(!this.state.init) this.setState({init: true})
            else this.updateStatus(snapshot.val());
        });
        //alert("Your Token No. is 95B3A");
    }
    updateStatus = (dishes) => {
        Object.keys(this.state.orders).map((val)=>{
            //dishes[val].available = false
            if(!dishes[val].available)
            {
                this.state.orders[val].info = dishes[val]
                //tmp = false;
            }
        })
        this.forceUpdate()
    }
    updateTotal = (val) => {
        this.setState(prev => {
            return {total: prev.total + val}
        })
    }
    deleteItem = (key) => {
        delete this.state.orders[key]
        this.forceUpdate()
    }
    placeOrder = () => {
        Payment(this.state.total, "", this.finallyPlaceOrder);
        //console.log(this.state.status + "alt");
    }
    //MD5 = (d) => {var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};
    //function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

    /** NORMAL words**/
    /*var value = 'test';

    var result = MD5(value);

    document.body.innerHTML = 'hash -  normal words: ' + result;



    //unescape() can be deprecated for the new browser versions
    result = MD5(unescape(encodeURIComponent(value)));
    }   */
    finallyPlaceOrder = async () => {
        const email = await AsyncStorage.getItem("email");
        let name = email.split("@")[0];
        let orderWrite = {};
        Object.entries(this.state.orders).map((val)=>{
            orderWrite[val[0]] = {"qty":val[1].cnt,"fname":val[1].info.name}
        });
        console.log(Object.entries(orderWrite));
        firebase.database().ref(this.state.shop + "/orders/" ).once('value').then((snapshot)=> {
            this.setState({orderNo: (snapshot.numChildren()+1)}); 
                firebase.database().ref(this.state.shop + "/orders/" + this.state.orderNo ).set({
                    "id":this.state.orderNo,
                    "payment":"done",
                    "uname": name, 
                    "desc":orderWrite,
                    "status":"requested"
                }).then(()=>{
                    console.log("updated");
                    var orderFood = firebase.database().ref(this.state.shop+"/"+"orders"+"/"+this.state.orderNo);
                    orderFood.on('value', async (snapshot)=> {
                        //console.log(snapshot.val())
                        //console.log(Object.keys(snapshot.val().desc));

                        let orderInfo = JSON.stringify({"shop": this.state.shop, "dishes": Object.keys(snapshot.val().desc).join(";")});
                        await AsyncStorage.setItem("prevOrder", orderInfo);
                        const hash = md5(snapshot.val().id.toString());
                        this.setState({token: hash.substring(0, 5)});
                    });
                }).catch((err)=>{
                    console.log(err);
                });
            }
        );    
    }
    render(){
        if(Object.entries(this.state.orders).length == 0)
            this.props.navigation.goBack() 
        return(
            <ScrollView style={styles.container}>
                { Object.entries(this.state.orders).map(entry => {
                        return <FoodItem key={entry[0]} id={entry[0]} item={entry[1]} 
                            updateTotal={this.updateTotal} deleteItem={this.deleteItem}/>
                    })
                }
                <View style={[styles.divider, {height: "1.5%"}]}></View>
                <View style={{margin: "2.5%", flexDirection: "row", height: "10%", justifyContent: "center"}}>
                    <Text style={{fontWeight: "bold", fontSize: 20, marginRight: "2%"}}>Note: </Text>
                    <Text style={{fontSize: 15, fontStyle: "italic", flexShrink: 1}}>If you're not in college, you'll be given a lower priority than usual</Text>
                </View>
                <View style={styles.totalContainer}>
                    <Text style={[styles.totalText, {fontSize: 22.5}]}>Total amount: </Text>
                    <Text style={styles.totalText}>Rs. {this.state.total}</Text>
                </View>
                <View style={[styles.divider, {height: "1%"}]}></View>
                <View style={styles.buttonContainer}>
                {
                    this.state.token == "" ? 
                    <TouchableOpacity style={styles.button} onPress={()=>{
                        this.placeOrder()
                    }}>
                        <Text style={styles.buttonText}>Place Order!</Text>
                    </TouchableOpacity> : 
                    <Text style={{fontSize: 20}}>Success! Your token no. is {this.state.token}</Text>
                }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: "2.5%", 
        flex: 1
    },
    divider: {
        width: "100%",
        backgroundColor: "#d2dae2"
    },
    totalContainer: {
        margin: "2.5%",
        marginTop: "0%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    totalText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    button: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#4cd137",
        width: "80%",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 20,
        color: "white"
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        padding: 20,
    }
})