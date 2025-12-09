import { courses as seededCourses, type Course } from '../data/courses';

const COURSES_KEY = 'admin_courses_v1';

function seedIfNeeded() {
  const raw = localStorage.getItem(COURSES_KEY);
  if (!raw) {
    // deep clone
    const copy = JSON.parse(JSON.stringify(seededCourses));
    localStorage.setItem(COURSES_KEY, JSON.stringify(copy));
  }
}

export async function getCourses(): Promise<Course[]> {
  seedIfNeeded();
  const raw = localStorage.getItem(COURSES_KEY) || '[]';
  return JSON.parse(raw) as Course[];
}

export async function getCourseById(id: string): Promise<Course | null> {
  const list = await getCourses();
  return list.find((c) => c.id === id) || null;
}

export async function createCourse(course: Course): Promise<Course> {
  const list = await getCourses();
  list.unshift(course);
  localStorage.setItem(COURSES_KEY, JSON.stringify(list));
  return course;
}

export async function updateCourse(course: Course): Promise<Course> {
  const list = await getCourses();
  const idx = list.findIndex((c) => c.id === course.id);
  if (idx >= 0) list[idx] = course;
  localStorage.setItem(COURSES_KEY, JSON.stringify(list));
  return course;
}

export async function deleteCourse(id: string): Promise<boolean> {
  const list = await getCourses();
  const next = list.filter((c) => c.id !== id);
  localStorage.setItem(COURSES_KEY, JSON.stringify(next));
  return true;
}

export async function getCounts() {
  const courses = await getCourses();
  return { courses: courses.length };
}

export default {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  getCounts,
};
