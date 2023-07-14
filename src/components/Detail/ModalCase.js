import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeContext'

export default function ModalCase({setIsOpen, film}) {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div className='modal-show'>
        <div id='modal1' class='modal' style={{display: 'block', top: '12%', zIndex: '1'}}>
            <div class='modal-content' style={{ backgroundColor: theme.backgroundColor, color: theme.color, boxShadow: `0 0 0 1000px ${theme.backgroundColor}` }}>
                <a class="red-text"><h5>Trailer for {film.name}</h5></a>
                <iframe width="100%" height="335px" src={film.clip} title={film.title} frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            </div>
            <div class='modal-footer' style={{ backgroundColor: theme.backgroundColor, color: theme.color, boxShadow: `0 0 0 1000px ${theme.backgroundColor}` }}>      
                <a class="cyan-text" style={{cursor: 'pointer'}} onClick={() => setIsOpen(false)}>Close&nbsp;&nbsp;</a>
            </div>
        </div>
    </div>
  )
}

// export default function ModalCase({setIsOpen, player}) {
//   return (
//     <div className='modal-show'>
//         <div id='modal1' class='modal' style={{display: 'block', top: '10%'}}>
//             <div class='modal-content'>
//                 <a class="cyan-text"><h5>Video for {player.name}</h5></a>
//                 <iframe width="100%" height="335px" src={player.clip} title={player.name} frameborder="0"
//                 allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
//             </div>
//             <div class='modal-footer'>      
//                 <a class="cyan-text" style={{cursor: 'pointer'}} onClick={() => setIsOpen(false)}>Close</a>
//             </div>
//         </div>
//     </div>
//   )
// }
