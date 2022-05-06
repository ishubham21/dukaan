import style from './SloganMaker.module.css'
import { useState } from "react"

const SloganMaker = () => {
    
    const [word, setWord] = useState("")
    
    //update the word on input change
    const handleWordChange = (e) => {
        setWord(e.target.value)
    }

    //clear input on clicking the cross
    const clearInput = () => {
        setWord("")
    }

    //handle form submit event
    const handleSubmit = (e) => {
        e.preventDefault()
        if(word){

        }
    }

    return (<>
        <div className={style.slogan__container}>
            <div className={style.slogan__childcontainer}>
                <div className={style.slogan__heading}>
                    <p className={style.slogan__title}>
                        Free Slogan Maker
                    </p>
                    <p className={style.slogan__desc}>
                        Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.
                    </p>
                </div>

                <div className={style.slogan__formcontainer}>
                    <form onSubmit={handleSubmit} className={style.slogan__form}>
                        <label htmlFor="slogan__keyword" className={style.slogan__inputlabel}>
                            Word for your slogan
                        </label>
                        
                        <div className={style.slogan__inputcontainer}>
                            <input type="text" className={style.slogan__inputbox} id="slogan__keyword" onChange={handleWordChange} value={word}/>
                            
                            {/* if word is empty, hide the cross */}
                            {word ? <div onClick={clearInput} className={style.slogan__cross}>
                                <span></span>
                                <span></span>
                            </div>: null}
                        </div>

                        <button type="submit" className={`${style.slogan__submit} ${word ? style.slogan__submitActive: style.slogan__submitMuted}`}>Generate Slogan</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default SloganMaker;