import {motion} from 'framer-motion';

const animations = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100}
}

function AnimatePage({children}) {
    return (
      <motion.div 
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{duration: 0.1}}
      >
        {children}    
      </motion.div>
    );
  }
  
  export default AnimatePage;