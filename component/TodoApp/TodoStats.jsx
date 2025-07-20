export default function TodoStats({ tasks }) {
  const completedCount = tasks.filter((task) => task.completed).length;
  return (
    <p className="text-sm text-gray-600 text-center">
      {completedCount} of {tasks.length} tasks completed
    </p>
  );
}
