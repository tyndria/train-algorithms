export default function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="POST"
    >
      <div>
        <label for="name">Name</label>
        <input name="name" id="name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input name="email" id="email" />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea name="message" id="message" />
      </div>
      <button>Send</button>
    </form>
  );
}
