
// import add from '../../Utils/calculate';
import { add, multiply } from '../../Utils/calculate';
import Watch from '../Watch/Watch';
import './sunglass.css'
const Sunglass = () => {

    const first = 55;
    const second = 199;
    const sum = add(first, second);

    const multi = multiply(first, second)
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;