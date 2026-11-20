import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY)

// Create
async function insertStudent() {
    const { data, error } = await supabase
    .from('students')
    .insert([
        { name: 'Andi', major: 'Informatika', gpa: 3.8 },
        { name: 'Budi', major: 'Sistem Informasi', gpa: 3.6 },
    ])
    .select()

    if (error) console.error('Insert error:', error)
    else console.log('Data inserted:', data)
}

// Read
async function getStudents() {
    const { data, error } = await supabase.from('students').select('*')
    if (error) console.error('Read error:', error)
    else console.log('Students:', data)
}

// Update
async function updateStudent() {
    const { data, error } = await supabase
        .from('students')
        .update({ gpa: 3.9 })
        .eq('name', 'Andi')
        .select()

    if (error) console.error('Update error:', error)
    else console.log('Updated:', data)
}

// Delete
async function deleteStudent() {
    const { data, error } = await supabase
        .from('students')
        .delete()
        .eq('name', 'Budi')
        .select()

    if (error) console.error('Delete error:', error)
    else console.log('Deleted:', data)
    }

// Sort
async function getTopStudents() {
    const { data, error } = await supabase
        .from('students')
        .select('*')
        .gt('gpa', 3.7)
        .order('gpa', { ascending: false })

    if (error) console.error('Sort error:', error)
    else console.log('Top students:', data)
}

// Filter
async function findAndi() {
    const { data, error } = await supabase
        .from('students')
        .select('*')
        .eq('name', 'Andi')
        .maybeSingle()

    if (error) console.error('Filter error:', error)
    else console.log('Andi:', data)
}

// Run in order
await insertStudent()
// await getStudents()
// await updateStudent()
// await getStudents()
// await getTopStudents()
// await findAndi()
// await deleteStudent()