export default function Select() {
  return (
    <form className="max-w-sm mx-auto mb-3">
      <label htmlFor="underline_select" className="sr-only">
        Underline select
      </label>
      <select
        id="underline_select"
        className="font-medium cursor-pointer block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer text-center"
      >
        <option defaultValue="Choose a table">Choose a table</option>
        <option value="1">1 table</option>
        <option value="2">2 table</option>
        <option value="3">3 table</option>
        <option value="4">4 table</option>
        <option value="5">5 table</option>
      </select>
    </form>
  );
}
