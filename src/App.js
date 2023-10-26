import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Blog,
  BlogDetail,
  Contact,
  Courses,
  Event,
  EventInfo,
  Home,
  InfoPageCourse,
  Loyout,
  Register,
  SignIn,
} from "./routes/Routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loyout />}>
        <Route index element={<Home />} />
        <Route path="event" element={<Event />} />
        <Route path="event/:id" element={<EventInfo />} />
        <Route path="courses" element={<Courses />} />
        <Route
          path="InfoPageCourse"
          element={
            <Suspense fallback={"loading ..."}>
              <InfoPageCourse />
            </Suspense>
          }
        />
        <Route
          path="blog"
          element={
            <Suspense fallback={"loading ..."}>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="blogdetail"
          element={
            <Suspense fallback={"loading ..."}>
              <BlogDetail />
            </Suspense>
          }
        />
         <Route
          path="contact"
          element={
            <Suspense fallback={"loading ..."}>
              <Contact />
            </Suspense>
          }
        />
      </Route>
      <Route path="signIn" element={<Suspense fallback={'loading ...'}>
          <SignIn/>
        </Suspense>} />

        <Route path="register" element={<Suspense fallback={'loading ...'}>
          <Register/>
        </Suspense>} />
    </Routes>
  );
}

export default App;
