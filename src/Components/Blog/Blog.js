import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center my-10">Blog</h1>
      <h1 className="text-5xl font-semibold text-center my-10">
        Some Questions Are Here
      </h1>
      <div className="my-10">
        <div
          tabIndex={0}
          className="collapse w-3/5 bg-gray-600 text-white mx-auto bg- collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is the purpas of react router
          </div>
          <div className="collapse-content">
            <p>
              ReactJS Router is mainly used for developing Single Page Web
              Applications. React Router is used to define multiple routes in
              the application. When a user types a specific URL into the
              browser, and if this URL path matches any 'route' inside the
              router file, the user will be redirected to that particular route.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse w-3/5 bg-gray-600 text-white mx-auto bg- collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How does contex api work
          </div>
          <div className="collapse-content">
            <p>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse w-3/5 bg-gray-600 text-white mx-auto bg- collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            write about useref
          </div>
          <div className="collapse-content">
            <p>
              The useRef is a hook that allows to directly create a reference to
              the DOM element in the functional component. Syntax: const
              refContainer = useRef(initialValue); The useRef returns a mutable
              ref object.
              <br />
              <br />
              useRef returns a mutable ref object whose .current property is
              initialized to the passed argument (initialValue). The returned
              object will persist for the full lifetime of the component.
              <br />
              <br />
              You might be familiar with refs primarily as a way to access the
              DOM. If you pass a ref object to React with{" "}
              {"<div ref={myRef} />"}, React will set its .current property to
              the corresponding DOM node whenever that node changes. However,
              useRef() is useful for more than the ref attribute. It’s handy for
              keeping any mutable value around similar to how you’d use instance
              fields in classes. This works because useRef() creates a plain
              JavaScript object. The only difference between useRef() and
              creating a {"current: ..."} object yourself is that useRef will
              give you the same ref object on every render. Keep in mind that
              useRef doesn’t notify you when its content changes. Mutating the
              .current property doesn’t cause a re-render. If you want to run
              some code when React attaches or detaches a ref to a DOM node, you
              may want to use a callback ref instead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
