import React,{useState,useEffect,useRef} from 'react'

function outsideClick(initialValue: boolean) {

    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(initialState);

    const handleClickOutside = (event : any) =>{
        if(ref.current && !ref.current.contains(event.target)) setVisible(false)
    }

    useEffect(() =>{
        document.addEventListener('click',handleClickOutside,true)
        return () => {
            document.removeEventListener('click',handleClickOutside,true)
        }
    },[ref]);
    return {visible,setVisible,ref}
}

export default outsideClick;
