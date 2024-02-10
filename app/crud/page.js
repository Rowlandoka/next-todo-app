import styles from './page.module.css';
import ToDoItem from '@/components/ToDoItem';

export default function Crud() {
	const items = ['Go to the Gym', 'Buy Groceries', 'Read a Book'];
	return (
		<div className={styles.main}>
			<h2>To-Do Items</h2>
			<ul>
				{items.map((item) => (
					<li key={item}>
						<ToDoItem item={item} />
					</li>
				))}
			</ul>
		</div>
	);
}
