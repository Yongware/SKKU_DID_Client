import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {Entypo} from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';
import userData from '../../info.json';

export default class MainScreen extends React.Component{
    state = {
        name:"",
        studentnumber: 0,
        idnumber_front: 0,
        idnumber_back: 0,
        school:"",
        department:"",
        isSet:false,
    };
    Register_preess(){
        this.props.navigation.push('Register')
    }
    age_certification_press(){
        this.props.navigation.push('AgeCheck')
    }
    SKKU_certification_press(){
        this.props.navigation.push('SKKUCheck')
    }
    Library_certification_press(){
        this.props.navigation.push('LibraryCheck')
    }
    componentDidMount(){
        if(userData!=null){
            this.setState({name:userData.name});
            this.setState({studentnumber:userData.studentnumber});
            this.setState({idnumber_front:userData.idnumber_front});
            this.setState({idnumber_back:userData.idnumber_back});
            this.setState({school:userData.school});
            this.setState({department:userData.department});
            this.setState({isSet:true})
        }
    }
    render(){
        if(!this.state.isSet){
            return(
                <ImageBackground
                        style = {styles.background}
                        source={require("./backlogo.png")}
                >
                <View style = {styles.container}>
                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity onPress={()=>this.Register_preess()}>
                            <LinearGradient
                            style = {styles.registerButton}
                            colors = {['#088A08', '#0B610B']}
                            start={{x:0, y:0}}
                            end={{x:1,y:1}}
                            >
                                <Text style={styles.title}>생 성 하 기 </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.certibutton}>
                            <Entypo style={styles.Icon}
                                name="creative-commons-attribution"
                                size={40} 
                            />
                            <TouchableOpacity
                            style = {styles.certificationButton}
                            onPress={()=>alert('아직 학생증 생성을 하지 않으셨습니다.')}>
                                <Text style={styles.certitle }> 성인 연령 인증</Text>
                            </TouchableOpacity>
                            <Entypo name="chevron-right"
                                style={styles.backIcon}
                                size={20} 
                            />
                        </View>
                        <View style={styles.certibutton}>
                            <Entypo style = {styles.Icon} name="graduation-cap" size={40} />
                            <TouchableOpacity
                            style = {styles.certificationButton}
                            onPress={()=>alert('아직 학생증 생성을 하지 않으셨습니다.')}>
                                <Text style={styles.certitle }> SKKU 학생 인증 </Text>
                            </TouchableOpacity>
                            <Entypo name="chevron-right"
                                style={styles.backIcon}
                                size={20} 
                            />
                        </View>
                        <View style={styles.certibutton}>
                            <Entypo style = {styles.Icon} name="book" size={40} />
                            <TouchableOpacity
                            style = {styles.certificationButton}
                            onPress={()=>alert('아직 학생증 생성을 하지 않으셨습니다.')}>
                                <Text style={styles.certitle }> 도서 대출 인증 </Text>
                            </TouchableOpacity>
                            <Entypo name="chevron-right"
                                style={styles.backIcon}
                                size={20} 
                            />
                        </View>
                    </View>
                </View>
                </ImageBackground>
            );
        }
        else{
            return(
                <View style = {styles.container}>
                    <LinearGradient
                    colors={['#088A08', '#0B610B']}
                    style={styles.contentContainer}
                    start={{x:0, y:0}}
                    end={{x:0.7,y:0.7}}
                    >
                        <Image style = {styles.profile} source={require(`../../profile.jpg`)}/>
                        <View style={styles.textContainer}>
                            <View style={styles.text}><Text style = {styles.contents}>이름:{" "}{this.state.name}</Text></View>
                            <View style={styles.text}><Text style = {styles.contents}>학번:{" "}{this.state.studentnumber}</Text></View>
                            <View style={styles.text}><Text style = {styles.contents}>생년월일:{" "}{this.state.idnumber_front}</Text></View>
                            <View style={styles.text}><Text style = {styles.contents}>소속:{" "}{this.state.school}</Text></View>
                            <View style={styles.text}><Text style = {styles.contents}>학과:{" "}{this.state.department}</Text></View>
                        </View>
                    </LinearGradient>
                    <View style={styles.buttonContainer}>
                        <View style={styles.certibutton}>
                            <Entypo style={styles.Icon}
                                name="creative-commons-attribution"
                                size={40} 
                            />
                            <TouchableOpacity
                            style = {styles.certificationButton}
                            onPress={()=>this.age_certification_press()}>
                                <Text style={styles.certitle }> 성인 연령 인증</Text>
                            </TouchableOpacity>
                            <Entypo name="chevron-right"
                                style={styles.backIcon}
                                size={20} 
                            />
                        </View>
                        <View style={styles.certibutton}>
                            <Entypo style = {styles.Icon} name="graduation-cap" size={40} />
                            <TouchableOpacity
                            style = {styles.certificationButton}
                            onPress={()=>this.SKKU_certification_press()}>
                                <Text style={styles.certitle }> 성균관대학교 학생 인증 </Text>
                            </TouchableOpacity>
                            <Entypo name="chevron-right"
                                style={styles.backIcon}
                                size={20} 
                            />
                        </View>
                        <View style={styles.certibutton}>
                            <Entypo style = {styles.Icon} name="book" size={40} />
                            <TouchableOpacity
                            style = {styles.certificationButton}
                            onPress={()=>this.Library_certification_press()}>
                                <Text style={styles.certitle }> 도서관 출입 및 도서 대출 </Text>
                            </TouchableOpacity>
                            <Entypo name="chevron-right"
                                style={styles.backIcon}
                                size={20} 
                            />
                        </View>
                    </View>
                </View>
            );

        }

        
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer:{
        flex:2,
        width:"100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    certibutton:{
        flex:1,
        flexDirection: 'row',
        width:"100%",
        height:"100%",
        borderBottomWidth: 1,
        borderBottomColor: '#D8D8D8',
        height: 50,
        paddingBottom:2,
        alignItems: 'center',
    },
    certificationButton:{
        flex:6,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    certitle:{
        color:"#08088A",
        fontSize:23,
        fontWeight:"300",
    },
    Icon:{
        flex:1,
        paddingLeft: 20,
        color:'#08088A',
        justifyContent: "center",
        alignItems: "baseline",
    },
    backIcon:{
        flex:1,
        color:'#08088A',
        alignItems:"flex-end"
    },
    buttonContainer:{
        flex:2,
        marginBottom: 100,
        width:"100%",
        alignItems: "center",
        justifyContent: 'center',
    },
    button:{
        flex:2,
        height:"100%",
        width: "100%",
        backgroundColor:"white",
    },
    profile:{
        width:"30%",
        height: "55%",
        borderColor: "white",
        borderWidth:1,
    },
    textContainer:{
        width:"50%",
        height: "55%",
        justifyContent: 'center',
        paddingLeft:20,
    },
    contents:{
        fontSize:20,
        fontWeight:"300",
        color:"white"
    },
    text:{
        flex:1,
        justifyContent: 'center',
    },
    registerButton:{
        height: "100%",
        width:300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "green",
        marginTop:50,
        borderRadius: 20,
    },
    title:{
        fontSize: 30,
        fontWeight: "900",
        color: "white"
    },
    background:{
        flex:1,
        height:"100%",
        width:"100%",
    },
})
