import { useState } from 'react'

function FlashCard({ flashCard }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleleave=(e)=>{
    e.preventDefault();
    e=setIsFlipped(true);
    
  }
  const handleenter=(e)=>{
    e.preventDefault();
    e=setIsFlipped(false);
    
  }

  return (
    <div className={`flashcard${isFlipped ? ' flip' : ''}`} onMouseEnter={handleleave} onMouseLeave={handleenter}>
      <div className="front-side">{flashCard.word}</div>
      <div className="back-side">{flashCard.persianEquivalent}</div>
    </div>
  )
}

export default FlashCard
