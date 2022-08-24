import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import { AnonymousRoute, LoggedInRoute } from "./util/AuthRoute";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from './pages/SinglePost';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <MenuBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/createPost" element={<AnonymousRoute />}>
              <Route exact path="/createPost" element={<CreatePost />} />
            </Route>
            <Route exact path="/login" element={<LoggedInRoute />}>
              <Route exact path="/login" element={<Login />} />
            </Route>
            <Route exact path="/register" element={<LoggedInRoute />}>
              <Route exact path="/register" element={<Register />} />
            </Route>
            <Route exact path='/posts/:postId' element={<SinglePost />} />

          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
