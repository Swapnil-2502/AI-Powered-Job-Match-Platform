import Navbar from '../components/Navbar'
import ProfileCard from '../components/ProfileCard'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';

const ProfilePage = () => {
    const token = localStorage.getItem('token')
    const decoded = token ? jwtDecode(token): null;

    const [form,setForm] = useState({
        name: '',
        location: '',
        experience: '',
        skills: [],
        jobType: 'any',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:3001/api/profile', form, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Profile saved successfully!');

        }
        catch(error){
            console.error(error);
            alert('Failed to save profile');
        }
    }
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen p-6 bg-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className='font-bold'>Your Current Profile:</h3>
          </div>
          <ProfileCard />
          <h2 className='font-bold'>Creating/Updating Profile of {decoded?.name || 'User'}</h2>
        
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded" />
                <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="Location" className="w-full border p-2 rounded" />
                <input type="number" name="experience" value={form.experience} onChange={handleChange} placeholder="Years of Experience" className="w-full border p-2 rounded" />

                <div>
                    <label className="font-medium block mb-2">Skills:</label>
                    <div className="flex gap-2">
                        <input
                        type="text"
                        placeholder="Type a skill and press Enter"
                        className="flex-1 border p-2 rounded"
                        value={form.newSkill || ''}
                        onChange={(e) => setForm({ ...form, newSkill: e.target.value })}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                            e.preventDefault();
                            if (form.newSkill?.trim() && !form.skills.includes(form.newSkill.trim())) {
                                setForm({
                                ...form,
                                skills: [...form.skills, form.newSkill.trim()],
                                newSkill: ''
                                });
                            }
                            }
                        }}
                        />
                        <button
                        type="button"
                        className="bg-green-600 text-white px-3 py-2 rounded"
                        onClick={() => {
                            if (form.newSkill?.trim() && !form.skills.includes(form.newSkill.trim())) {
                            setForm({
                                ...form,
                                skills: [...form.skills, form.newSkill.trim()],
                                newSkill: ''
                            });
                            }
                        }}
                        >
                        Add
                        </button>
                    </div>

                    {/* Show added skills */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {form.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2">
                            {skill}
                            <button
                            type="button"
                            className="text-red-500 font-bold"
                            onClick={() => {
                                const newSkills = form.skills.filter((s) => s !== skill);
                                setForm({ ...form, skills: newSkills });
                            }}
                            >
                            &times;
                            </button>
                        </span>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block mb-1">Preferred Job Type:</label>
                    <select name="jobType" value={form.jobType} onChange={handleChange} className="w-full border p-2 rounded">
                    <option value="remote">Remote</option>
                    <option value="onsite">Onsite</option>
                    <option value="any">Any</option>
                    </select>
                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Profile</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default ProfilePage