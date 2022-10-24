import './index.scss'

const AnimatedLetters = ({letterClass, strArray,idx }) => { //3 args, the class thay will the applied to the letter, the letter array and the index/where it starts
  return (
    <span>
        {strArray.map((char, i) => (
            <span 
                key={char+i} 
                className={`${letterClass} _${i + idx}`}
            >
                {char}
            </span>
        ))}
    </span>
  )
}

export default AnimatedLetters