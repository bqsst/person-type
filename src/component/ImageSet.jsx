import { motion } from 'framer-motion';

function ImageSet(props) {

    const { image, isSelected, onClick } = props;

    return (
        <motion.div
            onClick={onClick}
            whileHover={{ scale: isSelected ? 1.05 : 1.05 }}
            animate={{ scale: isSelected ? 1.05 : 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={`rounded-lg lg:rounded-xl w-[280px] sm:w-[240px] md:w-[250px] lg:w-[310px] 
                h-[150px] sm:h-[150px] md:h-[180px] lg:h-[210px] 
                ${isSelected ? 'border-[5px] border-blue-950' : ''}`}>
            <img src={image.picUrl} alt="" className='w-full h-full object-cover rounded-lg' />
        </motion.div>
    )
}

export default ImageSet;