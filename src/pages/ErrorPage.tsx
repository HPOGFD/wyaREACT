// Define the ErrorPage component to handle 404 errors or unmatched routes.
const ErrorPage = () => {
  return (
    <section>
      {/* Display an error message indicating the page was not found */}
      <h1>404: Page Not Found</h1>
      
      {/* Add a playful shrugging emoticon to convey a light-hearted tone */}
      <h1> ¯\_(ツ)_/¯</h1>
    </section>
  );
};

// Export the ErrorPage component for use in other parts of the application.
export default ErrorPage;
