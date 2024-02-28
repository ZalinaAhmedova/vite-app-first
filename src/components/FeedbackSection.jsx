import { useState } from "react";
import Button from "./Button/Button";
import InputValueForm from "./InputValueForm";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });

  function handleNameChange(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }

  return (
    <section>
      <h3>Обратная связь</h3>
      <form style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Ваше имя:</label>
        <input
          type="text"
          className="control"
          id="name"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения:</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <Button disabled={form.hasError}>Отправить</Button>

        <pre>
          Name: {form.name}
          <br />
          Reason: {form.reason}
        </pre>
      </form>

      <InputValueForm />
    </section>
  );
}
