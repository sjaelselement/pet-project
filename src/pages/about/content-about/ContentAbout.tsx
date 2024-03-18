import styles from './ContentAbout.module.scss'

const ContentAbout: React.FC = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.visual}>
				<div className={styles.image}>
					<img src='/about.jpg' alt='мое изображение' />
					<p>Начинающий специалист - Frontend Development</p>
				</div>
			</div>
			<div className={styles.resume}>
				<div className={styles.block}>
					<h4>Личная информация</h4>
					<p>
						<span>ФИО: </span>
						Евдокименко Олег Павлович
					</p>
					<p>
						<span>Гражданство: </span>
						Российская Федерация
					</p>
					<p>
						<span>Возраст: </span>
						24 года
					</p>
					<p>
						<span>Пол: </span>
						Мужской
					</p>
					<p>
						<span>Семейное положение: </span>
						Женат
					</p>
				</div>
				<div className={styles.block}>
					<h4>Образование</h4>
					<p>
						<span>Высшее неоконченное: </span>
						Томский Политехнический Университет (ТПУ)
					</p>
				</div>
				<div className={styles.block}>
					<h4>Стек технологий</h4>
					<p>
						<span>HTML5 - SEO | CSS3</span> - адаптивная и кросбраузерная
						верстка
					</p>
					<p>
						<span>JS (JavaScript)</span> - язык программирования |
						<span> TS (TypeScript)</span> - язык программирования
					</p>
					<p>
						<span>React.JS</span> - базовый фреймворк
					</p>
					<p>
						<span>React Router Dom v5|v6</span> - настройка маршрутизации
					</p>
					<p>
						<span>React Hook Form</span> - работа с формами и их валидацией
					</p>
					<p>
						<span>Axios | Fetch.js</span> - работа с API
					</p>
					<p>
						<span>Redux Redux Toolkit | React Query</span> - менеджеры состояния
					</p>
					<p>
						<span>MongoDB</span> - база данных, опыт работы с которой есть
					</p>
					<p>
						<span>Next.js App Router</span> - базовое понимание
					</p>
					<p>
						<span>
							Git |{' '}
							<a href='https://github.com/sjaelselement' target='_blank'>
								GitHub
							</a>
						</span>{' '}
						- контроль работы с версиями | social
					</p>
				</div>
			</div>
		</div>
	)
}

export default ContentAbout
