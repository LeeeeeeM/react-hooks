import WithDelayHint from './components/WithDelayHint'
import PureDisplay from './components/PureDisplay'


const DisplayWithDelay = WithDelayHint('isLoading', 2000)(PureDisplay)

export default DisplayWithDelay