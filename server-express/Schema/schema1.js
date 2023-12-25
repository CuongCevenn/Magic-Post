const mongoose = require('mongoose');

const receipt = new mongoose.Schema({
    senderName: {
        type: String,
        required: [true, "name must be provided"],
    },
    senderAddress: {
        type: String,
        required: [true, "name must be provided"],
    },
    senderPhoneNumber: {
        type: Number,
        required: [true, "name must be provided"],
    },
    senderCode: {
        type: Number,
        default: 0,
    },
    senderPostalCode: {
        type: Number,
        default: 1,
    },
    packageType: {
        type: Number,
        enum: {
            values: [0,1],
            message: 'PackageType Error',
        }
    },
    detail: {
        type: String,
        required: [true, "name must be provided"],
    },
    special: {
        type: String,
    },
    notReceiveDetail: {
        type: Number,
        enum: {
            values: [0,1,2,3,4],
            message: 'notReceiveDetail Error',
        },
    },
    senderTime: {
        type: Date,
        default: Date.now(),
    },
    receiverName: {
        type: String,
        required: [true, "name must be provided"],
    },
    receiverAddress: {
        type: String,
        required: [true, "name must be provided"],
    },
    receiverPhoneNumber: {
        type: Number,
        required: [true, "name must be provided"],
    },
    orderNumber: {
        type: Number,
        default: 2,
    },
    receiverPostalCode: {
        type: Number,
        default: 3,
    },
    CuocPhi: {
        type: String,
        required: [true, "name must be provided"],
    },
    CuocChinh: {
        type: String,
        required: [true, "name must be provided"],
    },
    CuocDVDB: {
        type: String,
        required: [true, "name must be provided"],
    },
    TongCuoc: {
        type: String,
        required: [true, "name must be provided"],
    },
    CODNguoiNhan: {
        type: String,
        required: [true, "name must be provided"],
    },
    ThuKhacNguoiNhan: {
        type: String,
        required: [true, "name must be provided"],
    },
    TongThuNguoiNhan: {
        type: String,
        required: [true, "name must be provided"],
    },
    KhoiLuongThucTe: {
        type: String,
        required: [true, "name must be provided"],
    },
    KhoiLuongQuyDoi: {
        type: String,
        required: [true, "name must be provided"],
    },
    ChuDanNghiepVu: {
        type: String,
        required: [true, "name must be provided"],
    },
    NgayGioNhan: {
        type: Date,
        required: [true, "name must be provided"],
    }
});

module.exports = mongoose.model("Biên lai", receipt);
