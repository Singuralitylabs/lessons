export default function ResponsiveExample() {
  /**
    * レスポンシブデザインの例
    - モバイル: 全幅、パディング2
    - sm以上: 幅1/2、パディング4  
    - md以上: 幅1/3、パディング6
    - lg以上: 幅1/4
    - xl以上: 幅1/6
    */
  return (
    <div className="bg-gray-200 text-center border w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 sm:p-4 md:p-6">
      レスポンシブボックス
    </div>
  );
}
