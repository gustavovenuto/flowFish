import React, {useState, createContext, useEffect} from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';
import  {format} from 'date-fns';

//responsavel por verificar se tem usuario logado ou nao

export const AuthContext = createContext({});


function AuthProvider({children}){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [photo, setPhoto] = useState('https://res.cloudinary.com/dlgq1ko0x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615166992/oleo7hjptcbeficu5avs.jpg')

    useEffect(()=>{
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }   
        loadStorage();
    }, []);

    

    //function para logar usuario
    async function signIn(email, password){
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async(value)=> {
            try{const uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=> {
                const data = {
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email,
                }
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
            }catch{
                alert('Algo deu errado')
            }
        }).catch((error)=> {
            alert('Usuario ou senha incorreto !');
            setLoadingAuth(false);
        })
        
    }





    //cadastrar usuario
    async function signUp(email, passoword, nome){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, passoword)
        .then(async(value)=>{
            const uid = value.user.uid
            await firebase.database().ref('users').child(uid).set({
                nome: nome,
                date: format(new Date(), 'dd/MM/yy'),
                photo: photo
            })
            .then(()=> {
                const data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                }
                setUser(data)
                storageUser(data);
                setLoadingAuth(false);
            }).catch((error)=> {
                alert(error.code);
                setLoadingAuth(false);
            })
        })
    }


    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }



    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(()=> {
            setUser(null);
        })
    }



    return(

        <AuthContext.Provider value={{signed: !!user, user, loading, signUp, signIn, signOut, loadingAuth}}>
            {children}
        </AuthContext.Provider>


    );
}

export default AuthProvider;