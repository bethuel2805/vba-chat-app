

const Message = () => {

	return (
		<div className="chat chat-end">
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src="https://randomuser.me/api/portraits/women/0.jpg" />
				</div>
			</div>
			<div className={`chat-bubble text-white pb-2`}>va temps</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:32</div>
		</div>
	);
};
export default Message;