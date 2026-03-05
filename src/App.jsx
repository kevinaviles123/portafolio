import './App.css'
import MainLayout from './components/layouts/MainLayout';
import Home from './components/pages/Home';

export default function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}