export default function CartComponent() {
  return (
    <div>
      <div>
        <img
          width={100}
          src="https://1.bp.blogspot.com/-iCnFX7eWVjs/XR9NQutHXcI/AAAAAAAAJ9k/ISWH3UXgJF8QJdsV6P9wh3agzOwOF_aYgCLcBGAs/s1600/cat-1285634_1920.png"
        />
        <div>
          <h2>Test title</h2>
          <div>
            <h3>Qty:</h3>
            <div>
              <button> -</button>
              <div>5</div>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
