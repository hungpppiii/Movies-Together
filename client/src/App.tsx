import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import MovieDetail from "./pages/MovieDetail";
import MoviePlayer from "./pages/MoviePlayer";
import Profile from "./pages/Profile";
import WatchList from "./pages/WatchList";
import { ProtectedRoute } from "./routes";
import Landing from "./pages/Landing";
import NavBar from "./layouts/NavBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="landing" element={<Landing />} />
          <Route element={<ProtectedRoute isAllowed={!!true} />}>
            <Route index element={<Home />} />
            <Route path="library" element={<Library />} />
            <Route path="detail" element={<MovieDetail />} />
            <Route path="movie-player" element={<MoviePlayer />} />
            <Route path="profile" element={<Profile />} />
            <Route path="watch-list" element={<WatchList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
