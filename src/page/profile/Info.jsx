import React from 'react'
const Info = () => {
  return (
    <div>
      <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Họ và tên<span className="text-red-500">*</span></label>
                        <input type="text" value="THÀNH ĐỖ VŨ" className="w-full border border-gray-300 rounded p-2 mt-1" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Số điện thoại</label>
                        <input type="text" value="566730000" className="w-full border border-gray-300 rounded p-2 mt-1" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Ngày sinh</label>
                        <input type="date" value="2000-01-08" className="w-full border border-gray-300 rounded p-2 mt-1" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Giới tính</label>
                        <div className="flex mt-1">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-l">Nam</button>
                            <button className="border border-gray-300 px-4 py-2">Nữ</button>
                            <button className="border border-gray-300 px-4 py-2 rounded-r">Khác</button>
                        </div>
                    </div>
                    <div>
                        <button className="w-full bg-gray-200 text-gray-500 px-4 py-2 rounded" disabled>Lưu</button>
                    </div>
                </div>
    </div>
  )
}

export default Info
