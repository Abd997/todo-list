import "./App.css";
import Main from "./containers/Main";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Main />
			</PersistGate>
		</Provider>
	);
}

export default App;
