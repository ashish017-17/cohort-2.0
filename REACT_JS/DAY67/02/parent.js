import h1 from './h1.js'
import box from './box.js'
import circle from './circle.js'



const parent = () => {

    return React.createElement('div', {id: parent}, [box(),circle(),h1()])

}

export default parent