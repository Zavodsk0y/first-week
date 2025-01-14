// Представьте, что у вас есть данные в одном формате, а вашему приложению требуется работать 
// с этими данными в другом формате. Реализуйте функцию, которая выполняет преобразование данных.
// Алгоритм:
// Принять данные в исходном формате (например, строка, список, словарь и т.д.).
// Преобразовать эти данные в нужный формат.
// Вернуть преобразованные данные.

interface SourceData {
    user_id: string,
    full_name: string,
    contact: {
        phone: string,
        email: string,
    },
    address: {
        city: string,
        zip: string,
    },
    is_active: boolean
};

interface TargetData {
    id: string,
    name: string,
    phone: string,
    email: string,
    location: string,
    status: string
}

const source: SourceData = {
    user_id: "123",
    full_name: "John Doe",
    contact: {
        phone: "+123456789",
        email: "john.doe@example.com",
    },
    address: {
        city: "New York",
        zip: "10001",
    },
    is_active: true,
};

const convertData = (sourceData: SourceData): TargetData => {
    return {
        id: sourceData.user_id,
        name: sourceData.full_name,
        phone: sourceData.contact.phone,
        email: `[${sourceData.contact.email}](<mailto:${sourceData.contact.email}>)`,
        location: `${sourceData.address.city}, ${sourceData.address.zip}`,
        status: sourceData.is_active ? "active" : "not_active"
    }
}

console.log(convertData(source))
