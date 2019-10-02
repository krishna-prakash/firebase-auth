export default function auth(state = { a: 123 }, action) {
      console.log(action.type);
      switch (action.type) {
            case 'ABC': {
                  console.log(123);
                  return {
                        abc: 123,
                  };
            }
            default:
                  return state;
      }
}

export function test() {
      return { type: 'ABC' };
}
