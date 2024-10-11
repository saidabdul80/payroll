<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Addition;
use App\Models\Attendance;
use App\Models\Branch;
use App\Models\Calendar;
use App\Models\Deduction;
use App\Models\Department;
use App\Models\Employee;
use App\Models\EmployeeEvaluation;
use App\Models\EmployeePosition;
use App\Models\EmployeeSalary;
use App\Models\EmployeeShift;
use App\Models\Globals;
use App\Models\Manager;
use App\Models\Metric;
use App\Models\Payroll;
use App\Models\Position;
use App\Models\Request;
use App\Models\Shift;
use App\Services\CommonServices;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Globals
        $this->seedGlobals();

        // Branches & Departments & Shifts
        $this->seedBranchesDepartmentsPositionsShifts();

        // Create Test Employees
        $root = Employee::factory()->create([
            'name' => 'Super Root',
            'email' => 'super@root.com',
            'phone' => '01001005000',
            'national_id' => '29904268801154',
            'hired_on' => '2023-01-25',
            'password' => '$2y$10$7BMn8WlpLkUB64fCCCVCvuFbqp4dO34dLL/a7MjMdoITz0FOIOZ.G', // password
        ]);
        $emp = Employee::factory()->create([
            'name' => 'Spicy Leaf',
            'email' => 'spicy@pillow.com',
            'phone' => '01001005001',
            'national_id' => '29904268801155',
            'hired_on' => '2023-01-25',
            'password' => '$2y$10$7BMn8WlpLkUB64fCCCVCvuFbqp4dO34dLL/a7MjMdoITz0FOIOZ.G', // passwprd
        ]);

           // Create roles
           $roles = [
            'admin',
            'employee',
        ];

        foreach ($roles as $role) {
            Role::create(['name' => $role]);
        }

        $knighthood = Role::findByName('admin');
        $root->assignRole($knighthood);
        $this->call([
            SalaryStructureSeeder::class,
            TaxBracketSeeder::class,
            CraSeeder::class
        ]);

        Employee::factory(14)->create();
         
        // Random Assignments
        foreach (Employee::all() as $index => $employee) {
            if ($employee->id != 1) {
                $employee->assignRole(Role::findByName('employee'));
            }
            EmployeePosition::create([
                'employee_id' => $employee->id,
                'position_id' => $index % 4 + 1,
                'start_date' => now()->format('Y-m-d'),
                'end_date' => null,
            ]);
            EmployeeShift::create([
                'employee_id' => $employee->id,
                'shift_id' => $index % 2 + 1,
                'start_date' => now()->format('Y-m-d'),
                'end_date' => null,
            ]);

            $currencies = ['NGN'];
            $sa = EmployeeSalary::create([
                'employee_id' => $employee->id,
                'currency' =>'NGN',
                'salary' => fake()->numberBetween(2000, 8000),
                'salary_structure_id' => fake()->numberBetween(1,5),
                'start_date' => now()->format('Y-m-d'),
                'end_date' => null,
            ]);

            $currentDate = CarbonImmutable::now();
            $startDate = $currentDate->startOfMonth();

            $days = $currentDate->diffInDays($startDate);
            $attendanceTypes = ['on_time', 'late', 'missed'];
            $commonServices = new CommonServices();

            for ($i = 0; $i < $days; $i++) {
                if (!$commonServices->isDayOff($startDate->format('Y-m-d'))) {
                    if(fake()->boolean){
                        Attendance::create([
                            'employee_id' => $employee->id,
                            'date' => $startDate->format('Y-m-d'),
                            'status' => 'on_time',
                            'sign_in_time' => $employee->activeShift()->start_time,
                            'sign_off_time' => $employee->activeShift()->end_time,
                        ]);
                    } else {
                        Attendance::create([
                        'employee_id' => $employee->id,
                        'date' => $startDate->format('Y-m-d'),
                        'status' => 'missed',
                        ]);
                    }
                }
                $startDate = $startDate->addDay();
            }
        }
        
        Metric::factory(5)->create();

     
    

        // Assign Managers to branch #1 and department #1
        Manager::create([
            'employee_id' => 1,
            'branch_id' => 1,
            'department_id' => null,
        ]);
        Manager::create([
            'employee_id' => 2,
            'branch_id' => null,
            'department_id' => 1,
        ]);

        // Generate Random Payrolls
        $this->generateRandomPayrolls();

        // Generate Random Requests & Calendar Items
        $this->seedRequests();
        $this->seedCalendarItems();

      
    }

    private function seedGlobals(): void
    {
        Globals::create([
            'organization_name' => 'Federal University of Technology Minna.',
            'organization_address' => '123 Main Street, Anytown, Nigeria',
            'absence_limit' => 30,
            'minimum_wage_in_value'=> 30000,
            'minimum_tax_determination_in_%'=> 1,
            'email' => 'info@globalsolutions.com',
        ]);
    }
    private function seedBranchesDepartmentsPositionsShifts(): void
    {
        Branch::factory()->create([
            'name' => 'Bosso Campus',
        ]);

        Branch::factory()->create([
            'name' => 'GK Campus',
        ]);

        Department::create([
            'name' => 'Bursary',
        ]);

        Department::create([
            'name' => 'Computer Science',
        ]);

        Department::create([
            'name' => 'Academic Planning Unit',
        ]);

        Department::create([
            'name' => 'Cyber Security',
        ]);

        Position::create([
            'name' => 'Registra',
            'description' => 'Registra',
        ]);

        Position::create([
            'name' => 'Bursar',
            'description' => 'Bursar',
        ]);

        Position::create([
            'name' => 'Senior Lecturer',
            'description' => 'Senior Lecturer',
        ]);

        Position::create([
            'name' => 'Assistant Lecturer',
            'description' => 'Assistant Lecturer',
        ]);

        Shift::create([
            'name' => "Day Shift",
            'start_time' => '08:00:00',
            'end_time' => '16:00:00',
        ]);

        Shift::create([
            'name' => "Night Shift",
            'start_time' => '16:00:00',
            'end_time' => '00:00:00',
        ]);
    }

    private function seedRequests(): void
    {
        for ($i = 1; $i <= Employee::count(); $i++) {
            $requestTypes = ['complaint', 'payment', 'leave', 'other'];
            Request::create([
                'employee_id' => $i,
                'type' => $requestTypes[array_rand($requestTypes)],
                'start_date' => Carbon::now()->addDays(fake()->numberBetween(1, 100))->toDateString(),
                'end_date' => null,
                'message' => fake()->sentence(10),
                'status' => fake()->numberBetween(0, 2),
                'admin_response' => fake()->sentence(10),
                'is_seen' => fake()->boolean,
            ]);
        }
    }

    private function seedCalendarItems(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            $calendarTypes = ['holiday', 'meeting', 'event', 'other'];
            $start_date = Carbon::now()->addDays(fake()->numberBetween(1, 30));
            Calendar::create([
                'start_date' => $start_date->toDateString(),
                'end_date' => $start_date->addDays(fake()->numberBetween(0, 2))->toDateString(),
                'title' => fake()->sentence(2),
                'type' => $calendarTypes[array_rand($calendarTypes)],
            ]);
        }
    }
    private function generateRandomPayrolls(){
        for ($i = 1; $i <= Employee::count(); $i++) {
            $employee = Employee::find($i);
            $employee_id = $employee->id;

            $p = Payroll::factory()->create([
                'employee_id' => $employee_id,
                //'salary_structure_id'=> $employee->salary()[3],
                'base'=>$employee->salary()[1],
                'total_payable'=>$employee->salary()[1],
                "due_date" => Carbon::now()->toDateString(),
            ]);

            $metrics = Metric::get();
            for ($j = 0; $j < $metrics->count(); $j++) {
                $metric_id = $metrics[$j]->id;
                EmployeeEvaluation::create([
                    'employee_id' => $employee_id,
                    'metric_id' => $metric_id,
                    'payroll_id' => $p->id,
                    'date' => Carbon::now()->toDateString(),
                ]);
            }

            Addition::factory()->create([
                'payroll_id' => $p->id,
                "due_date" => Carbon::now()->toDateString(),
            ]);

            Deduction::factory()->create([
                'payroll_id' => $p->id,
                "due_date" => Carbon::now()->toDateString(),
            ]);
        }
    }

}
