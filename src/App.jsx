import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import News from './Pages/News'
import Partnerships from './Pages/Partnerships'
import Volunteering from './Pages/Volunteering'
import Donate from './Pages/Donate'
import Recognitions from './Pages/Recognitions'
import Activities from './Pages/Activities'
import Expenses from './Pages/Expenses'
import Achievements from './Pages/Achievements'
import Contact from './Pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/recognitions" element={<Recognitions />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
