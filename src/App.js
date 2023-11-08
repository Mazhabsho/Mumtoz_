import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Blog,
  BlogDetail,
  Contact,
  Courses,
  DomesUniversity,
  Event,
  EventInfo,
  Home,
  InfoPageCourse,
  InterUniversity,
  Loyout,
  Register,
  Shop,
  SignIn,
} from "./routes/Routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loyout />}>
        {/* <Route index element={<Home />} /> */}
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
          path="shop"
          element={
            <Suspense fallback={"loading ..."}>
              <Shop />
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

        <Route
          path="interUni"
          element={
            <Suspense fallback={"loading ..."}>
              <InterUniversity />
            </Suspense>
          }
        />

        <Route
          path="domesticUni"
          element={
            <Suspense fallback={"loading ..."}>
              <DomesUniversity/>
            </Suspense>
          }
        />
      </Route>

      <Route
        path="register"
        element={
          <Suspense fallback={"Loading ..."}>
            <Register />
          </Suspense>
        }
      />
      <Route
        path="singIn"
        element={
          <Suspense fallback={"Loading ..."}>
            <SignIn />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
