import {
  Routes,
  Route,
} from 'react-router-dom';

import IndexPage from "@/pages/IndexPage";

const App = () => {
  return (
    <Routes>
      <Route exac path="/" element={<IndexPage />} />
    </Routes>
  );
}

export default App;
