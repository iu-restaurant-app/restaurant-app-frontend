export default function Select() {
  return (
    <form className="max-w-sm mx-auto">
      <label
        htmlFor="number-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Write your table number
      </label>
      <input
        type="number"
        id="number-input"
        aria-describedby="helper-text-explanation"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-0"
        placeholder="120"
        required
      />
    </form>
  );
}
