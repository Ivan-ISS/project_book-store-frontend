import styles from './userModalContent.module.scss';
import { formProfile } from '@/data';
import { FormEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, RootDispatch } from '@/redux/store';
import { editUser } from '@/redux/slices/authSlice';
import { setDataUser } from '@/redux/slices/authSlice';
import Input from '../../Input/input';
import Button from '../../Button/button';

export interface UserModalContentProps {
    closeModal: () => void;
}

export default function UserModalContent({ closeModal }: UserModalContentProps) {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const userId = useSelector((state: RootState) => state.auth.userData.id);
    const dispatch = useDispatch<RootDispatch>();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setDataUser(formData));
        dispatch(editUser({ id: userId, name: formData.name, description:formData.description }));
        closeModal();
    };

    const handleChange = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
        field = field.toLowerCase();
        setFormData(prevData => ({
            ...prevData,
            [field]: event.target.value
        }));
    };

    return (
        <div className={styles.contentUser}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <legend className={styles.legend}>Profile</legend>
                <div className={styles.fileds}>
                    {formProfile.map((field, index) => (
                        <Input
                            key={index}
                            type={field}
                            onChange={(e) => handleChange(field, e)}
                        />
                    ))}
                </div>
                <Button
                    type="submit"
                    isDisabled={false}
                    text={'Apply'}
                    fontSize={'big'}
                    color={'purple'}
                />
            </form>
        </div>
    );
}