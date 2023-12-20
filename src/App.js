import { Switch, Route} from 'react-router-dom'

import LandingPage from './components/LandingPage'
import BMICalculator from './components/BMICalculator'

const App = () => (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/bmi-calculator" component={BMICalculator} />
    </Switch>
)

export default App
