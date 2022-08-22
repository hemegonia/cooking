const Component = () => {
  return (
    <div className="flex gap-4 rounded-sm p-4 shadow-lg">
      <div
        style={{ height: '120px', width: '120px' }}
        className="flex shrink-0 items-center justify-center rounded-xl bg-slate-200"
      >
        [image]
      </div>
      <div className="flex grow flex-col justify-between">
        <h4>title really long title</h4>
        <div className="text-right">Save</div>
      </div>
    </div>
  );
};

export default Component;
